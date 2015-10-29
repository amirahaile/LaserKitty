#!/usr/bin/python3

from subprocess import Popen, PIPE

# METHODS
def processRunning():    
    process = Popen(["ps -e | grep avconv"],
                    stdout=PIPE,
                    shell=True)

    output = process.communicate()[0]
    
    if len(output) > 0:
        # there is a process running
        return True
    else:
        # there is not a process running
        return False


# COMMANDS

if processRunning():
    # skip this run
    pass
else:
    # execute bot script
    bot_process = Popen(["/home/pi/dev/LaserKitty/cron_play.py"],
                        start_new_session=True)

    # update browser status
    data = { 'io': 'on', 'commander': 'pi' }
    requests.post('http://kittylaserbot.com/update_bot', json=data)



