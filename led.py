import RPi.GPIO as GPIO

DEBUG = True

GPIO.setwarnings(False)
GPIO.setmode(GPIO.BCM)
LED = 12

GPIO.setup(LED, GPIO.OUT)

def light():
    try:
        if DEBUG:
            print('This should be working.')

        GPIO.output(LED, True)
        GPIO.output(LED, False)
        GPIO.output(LED, True)

    finally:
        GPIO.cleanup()

light()

