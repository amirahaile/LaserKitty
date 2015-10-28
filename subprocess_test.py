from subprocess import Popen
import time

#p = subprocess.call("python ~/dev/LaserKitty/pattern1.py", shell=True)
#q = subprocess.call("sudo ~/ustream", shell=True)

#print(p)

print("Recording...")
p = Popen("sudo ~/ustream", shell=True)
pid = p.pid

print("Shutting down in...")
for i in range(5, 0, -1):
    print(i)
    time.sleep(1)

# would have liked to kill the process directly
# with the PID or the subprocess object
# but `kill()` and `terminate()` were not responding
# as well as another `Popen` command
Popen("sudo killall -9 avconv", shell=True)
