#!/user/bin/python

import datetime
import time

#--- CURRENT & TERMINATION TIMESTAMPS

# take note of current time
current_time = datetime.datetime.now().time()
current_hour = current_time.hour
current_min  = current_time.minute

# create endtime for safe-guard termination
# i.e. the user doesn't end the game manually
game_time_mins = 7
end_hour = current_hour
end_min = current_min + game_time_mins

if end_min > 60:
    end_min -= 60
    end_hour += 1

if end_hour > 24:
    end_hour -= 24

end_time = datetime.time(end_hour, end_min)
