#!/usr/bin/python2

from Adafruit_PWM_Servo_Driver import PWM
import datetime
import time
import random

#--- SETUP
pwm = PWM(0x40)

freq = 50 # ranges 40-1000
pwm.setPWMFreq(freq)
time_per_tick = (1.0 / freq) / 4096 # servo max tick = 4096

start_time = datetime.datetime.now()
game_time = 180 # 3 min

def timeDiff():
    current_time = datetime.datetime.now()
    time_diff = current_time - start_time
    time_diff = time_diff.total_seconds()
    return time_diff

def calcTick(angle):
    milisec = (angle / 100.0) + 0.6
    microsec = milisec / 1000
    tick = microsec / time_per_tick
    return tick

def randAngle(max_deg):
    return random.randrange(0, max_deg)


#--- PLAY

# laser turns on
pwm.setPWM(6, 0, 4095)

# max deg rotation
btm_servo_max_deg = 150
# restricted so it won't point off the ground
top_servo_max_deg = 45

while timeDiff() < game_time:
    btm_servo_angle = randAngle(btm_servo_max_deg)
    top_servo_angle = randAngle(top_servo_max_deg)

    print("Bottom: %d" % int(btm_servo_angle))
    print("Top: %d" % int(top_servo_angle))
    print(" ")
    
    btm_servo_tick = int(calcTick(btm_servo_angle))
    top_servo_tick = int(calcTick(top_servo_angle))

    pwm.setPWM(0, 0, btm_servo_tick)
    pwm.setPWM(4, 0, top_servo_tick)

    time.sleep(1)

# game over; turn off laser and reset
pwm.setPWM(0, 0, 123)
pwm.setPWM(4, 0, 123)
pwm.setPWM(6, 0, 0)
