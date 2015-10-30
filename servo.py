#!/user/bin/python

from Adafruit_PWM_Servo_Driver import PWM
import RPi.GPIO as GPIO
import time

# METHODS
freq = 50
min_deg = 0
max_deg = 45 # servo max = 150
time_per_tick = (1.0 / freq) / 4096 # servo max tick = 4096

def calcTick(angle):
    milisec = (angle / 100.0) + 0.6
    microsec = milisec / 1000
    tick = microsec / time_per_tick
    return tick
    


print(calcTick(30))
print(calcTick(90))
print(calcTick(120))





pwm = PWM(0x40)
pwm.setPWMFreq(freq)

#print("longest")
#time.sleep(1)
##pwm.setPWM(4, 0, 245)
##time.sleep(3)
##pwm.setPWM(4, 0, 183)
##time.sleep(3)
##pwm.setPWM(4, 0, 500)

##print("half")
##time.sleep(5)
##pwm.setPWM(4, 0, 245)
##
##print("littlest")
##time.sleep(5)
##pwm.setPWM(4, 0, 183)



#while (True):
    #pwm.setPWM(0, 0, first)
    #pwm.setPWM(4, 0, first)
    #time.sleep(1)

    #pwm.setPWM(0, 0, second)
    #pwm.setPWM(4, 0, second)
    #time.sleep(1)

    #pwm.setPWM(0, 0, third)
    #pwm.setPWM(4, 0, third)
    #time.sleep(1)
