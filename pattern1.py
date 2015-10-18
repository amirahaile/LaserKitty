#!/user/bin/python

from Adafruit_PWM_Servo_Driver import PWM
import RPi.GPIO as GPIO
import datetime
import time
import random

# setup
pwm = PWM(0x40)
pwm.setPWMFreq(40) # set at minimum freq

GPIO.setwarnings(False) # comment this out to check
GPIO.setmode(GPIO.BOARD)
#green_LED = (pinNum)

# -------

# robot starts

# laser turns on
#GPIO.output(green_LED, True)

# take note of time
current_time = datetime.datetime.now().time()
current_hour = current_time.hour
current_min  = current_time.minute

# create game's end time
game_time_mins = 1
end_hour = current_hour
end_min = current_min + game_time_mins

if end_min > 60:
    end_min -= 60
    end_hour += 1

if end_hour > 24:
    end_hour -= 24

end_time = datetime.time(end_hour, end_min)

# play -----

# bottom servo needs full range; top is limited
btm_servo_min_deg = 100
top_servo_min_deg = 400
# 600 is max, but wouldn't be included in range()
btm_servo_max_deg = (600 + 1)
top_servo_max_deg = (600 + 1)

while (datetime.datetime.now().time() < end_time):
    btm_servo_coord = random.randrange(btm_servo_min_deg, btm_servo_max_deg)
    top_servo_coord = random.randrange(top_servo_min_deg, top_servo_max_deg)

    pwm.setPWM(0, 0, btm_servo_coord)
    pwm.setPWM(4, 0, top_servo_coord)

    time.sleep(1)

# game over - turn off LED
#GPIO.output(green_LED, False)
 
 
