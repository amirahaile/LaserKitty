#!/usr/bin/python3

from subprocess import Popen, PIPE

# METHODS
def checkProcesses():
    global process_running
    
    process = Popen(["ps -e | grep avconv"],
                    stdout=PIPE,
                    shell=True)

    output = process.communicate()[0]
    
    if len(output) > 0:
        # there is a process running
        process_running = True
    else:
        # there is not a process running
        process_running = False


# COMMANDS

checkProcesses()

if process_running:
    pass
else:
    # run bot script
    bot_process = Popen(["file"], start_new_session=True)
