#!/user/bin/python

import requests
import datetime
import time
import subprocess

response = requests.get('http://kittylaserbot.com/raspi').json()
print(response)

status = response["io"]
controller = response["controller"]
data = { "io" : "off", "commander" : "pi" }

# take note of time
current_time = datetime.datetime.now().time()
current_hour = current_time.hour
current_min  = current_time.minute

# create game's end time
game_time_mins = 5
end_hour = current_hour
end_min = current_min + game_time_mins

if end_min > 60:
    end_min -= 60
    end_hour += 1

if end_hour > 24:
    end_hour -= 24

end_time = datetime.time(end_hour, end_min)

if status == "on":
    p = subprocess.call(["~/dev/LaserKitty/pattern1.py"])

    if (datetime.datetime.now().time < end_time):
        # stop the file
        p.kill() # didn't work
            
    requests.post('http://kittylaserbot.com/update_bot', json=data)


