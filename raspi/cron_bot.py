#!/usr/bin/python3

from subprocess import Popen, PIPE
import crontab import CronTab 

url = 'http://kittylaserbot.com/update_bot'

# beginnings of updating schedule from the browser
#pi_cron = CronTab(user='pi')[0]

# METHOD
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
    # skip this run; send schedule info
    schedule = { 'io': 'on', 'commander': 'browser' }
    requests.post(url, json=schedule)
    
else:
    # execute bot script
    bot_process = Popen(["/home/pi/dev/LaserKitty/cron_play.py"],
                        start_new_session=True)

    # update browser status
    data = { 'io': 'on', 'commander': 'pi' }
    requests.post(url, json=data)





