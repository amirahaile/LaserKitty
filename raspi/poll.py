#!/usr/bin/python3

from subprocess import Popen, PIPE
import requests
import datetime
import time
import os
import signal


# VARIABLES
ustream_process = None
ustream_starttime = None

# METHODS
def killProcesses():
    global ustream_process
    
    # kills parent process
    ustream_process.terminate()
    bot_play_process.terminate()
    # kills child processes
    os.killpg(ustream_process.pid, signal.SIGKILL)
    os.killpg(bot_play_process.pid, signal.SIGKILL)
    print("Killed it.")
    print("Is it dead?: %d" % ustream_process.poll())

def startProcesses():
    global ustream_process, ustream_starttime, bot_play_process
    ustream_path = "/home/pi/ustream"
    browser_play_path = "/home/pi/dev/LaserKitty/browser_play.py"
    
    ustream_process = Popen([ustream_path], start_new_session=True)
    bot_play_process = Popen([browser_play_path], start_new_session=True)
    ustream_starttime = datetime.datetime.now()
    print("Now streaming!")
    print(ustream_starttime)

def checkProcesses():
    global process_running
    
    process = Popen(["ps -e | grep avconv"],
                    stdout=PIPE,
                    shell=True)

    output = process.communicate()[0]
    print("Process: %s" % output)
    
    if len(output) > 0:
        # there is a process running
        process_running = True
    else:
        # there is not a process running
        process_running = False

    print("Process is running: %s" % process_running)


# CLEAN PROCESSES
Popen("sudo killall -9 avconv", shell=True)


# POLLING
while True:
    
    #--- CHECK BROWSER
    response = requests.get('http://kittylaserbot.com/raspi').json()
    print("JSON response: %s" % response)
    requested_status = response["io"]

    #--- CHECK PI
    
    checkProcesses()

    #--- COMMANDS
            
    if process_running and requested_status == "on":
        # do nothing; unless it's been too long
        current_time = datetime.datetime.now()
        time_diff = current_time - ustream_starttime
        time_diff = time_diff.total_seconds()
        print("Time difference (secs): %d" % time_diff)

        if time_diff >= 300: # 5 min
            killProcesses()

            # update browser status
            data = { 'io': 'off', 'commander': 'pi' }
            requests.post('http://kittylaserbot.com/update_bot', json=data)
    
    elif not process_running and requested_status == "on":
        startProcesses()
        
    elif process_running and requested_status == "off":
        killProcesses()
        
    elif not process_running and requested_status == "off":
        print("We're doing nothing.")
        pass # do nothing

    time.sleep(1)

