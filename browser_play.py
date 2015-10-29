#!/usr/bin/python2

from Adafruit_PWM_Servo_Driver import PWM
import RPi.GPIO as GPIO
import datetime
import time
import random

#--- SETUP
pwm = PWM(0x40)
pwm.setPWMFreq(40) # min freq

GPIO.setwarnings(False) # comment this out to check
GPIO.setmode(GPIO.BOARD)
#green_LED = (pinNum)

# 3 ways to stop browser play:
# 1 - manually via browser
# 2 - poll.py kills @ 5 min if browser doesn't send "off" command
# 3 - this script timeouts at 10 min if 1 & 2 fail
start_time = datetime.datetime.now()
game_time = 600 # 10 min

def timeDiff():
    current_time = datetime.datetime.now()
    time_diff = current_time - start_time
    time_diff = time_diff.total_seconds()
    return time_diff


#--- PLAY

# laser turns on
pwm.setPWM(6, 0, 4095)

# bottom servo needs full 180deg range; top is limited
btm_servo_min_deg = 100
top_servo_min_deg = 400

btm_servo_max_deg = (600 + 1)
top_servo_max_deg = (600 + 1)

while timeDiff() < game_time:
    # plays indefinitely
    # process will be killed by browser or timeout in polly.
    btm_servo_coord = random.randrange(btm_servo_min_deg, btm_servo_max_deg)
    top_servo_coord = random.randrange(top_servo_min_deg, top_servo_max_deg)

    pwm.setPWM(0, 0, btm_servo_coord)
    pwm.setPWM(4, 0, top_servo_coord)

    time.sleep(1)

# game over; turn off laser
pwm.setPWM(6, 4096, 0)

 
 
