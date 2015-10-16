#!/user/bin/python

from Adafruit_PWM_Servo_Driver import PWM
import time

pwm = PWM(0x40)

first  = 150
second = 300
third  = 600

pwm.setPWMFreq(40)

while (True):
    pwm.setPWM(0, 0, first)
    pwm.setPWM(4, 0, first)
    time.sleep(1)

    pwm.setPWM(0, 0, second)
    pwm.setPWM(4, 0, second)
    time.sleep(1)

    pwm.setPWM(0, 0, third)
    pwm.setPWM(4, 0, third)
    time.sleep(1)
