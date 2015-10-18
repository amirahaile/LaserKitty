# Remote Laser Toy Robot for Cats

[Ada Developers Academy](http://adadevelopersacademy.org/)'s six month classroom portion culminates in a month long capstone project. Although Ada is a web development program, I chose to build a robot using the Raspberry Pi 2. This is my first serious endeavor into hardware and it's proved to be challenging. These detailed instructions are for anyone interested in building this robot and assume zero experience with hardware and/or programming.

## Materials

### Hardware
+ [Raspberry Pi 2 Model B](https://www.adafruit.com/products/2358) $39.95
  + [5V 2A switching power supply](https://www.adafruit.com/products/276) $7.95
+ [2 micro servos](http://www.radioshack.com/radioshack-micro-servo/2730765.html) $12.99/each
  + [Adafruit 16-Channel PWM/Servo HAT](https://www.adafruit.com/products/2327) $17.50
  + [4.5V 700MmA power adapter](http://www.radioshack.com/enercell-4-5v-700ma-ac-adapter/2730353.html) $6.97
  + RadioShack Adaptaplug Tip "K" $6.00
  + [Pi Cobbler with Breakout Cable for Pi 2](https://www.adafruit.com/products/914) $6.95
    + [male-to-male jumper leads](http://www.adafruit.com/products/153) $6
+ [Miniature WiFi Module](https://www.adafruit.com/products/814) $11.95

### Tools
+ soldering iron
+ soldering lead/wire
+ soldering flux?
+ solder wick (to remove soldering)

To (one-time) set up the Raspberry Pi:
+ monitor
+ HDMI cable
+ (wireless) keyboard
+ (wireless) mouse
+ ethernet cable
+ ethernet USB adapter
+ 32GB SD card

## Instructions

### Installing the Operating System

Unless you bought a kit, your Raspberry Pi 2 _will not_ come out of the box with a power supply or SD card. Buy a 5V 2A power adapter to power your Pi and purchase a SD/SDHC/SDXC card to store memory. Documentation will say you need a SD card with a  minimum of 4GB, but I wouldn't do less than 16GB; insufficient memory space can be one less thing to worry about.

Now you'll need to:  
  1. Reformat your SD card
  1. Download and extract the NOOBS operating system (OS) installer
  1. Transfer the extracted files to your SD card

To install Raspbian, the Pi OS, insert the SD card into your Pi and connect the Pi to a keyboard and monitor (via its USB and HDMI ports). Once you connect the Pi to a power supply, it should prompt you to install Raspbian and will boot up after the installation completes.  

Visit the Raspberry Pi website for [detailed instructions](https://www.raspberrypi.org/help/noobs-setup/).

### Control Your Pi via A Laptop and Ethernet

After Raspbian is installed, you'll be able to connect your Pi to the Internet and ultimately ditch the monitor and keyboard for your laptop. Connect your Pi to your laptop via its ethernet port (your laptop may need an ethernet USB adapter).  

[Setup IP address](https://pihw.wordpress.com/guides/direct-network-connection/)
[VNC viewing](http://diyhacking.com/connect-raspberry-pi-to-laptop-display/)

### Building the Board

First, disconnect your Pi from any power supply or external equipment.

### Turn On the Servos & Laser

### Point at a Coordinate

### Follow a Pattern

### Function Remotely

### Stream Video

### Control Via the Browser


## Thank You
In no particular order:  

Andrew Gorcester - well of knowledge & practice Raspberry Pi   
Loraine Kanervisto - soldering iron  
Crystal Hess - wireless keyboard and projector
Jeremy Flores - cheerleader
Charles Ellis - WiFI guru
Elia Grenier - Ethernet adapter
Carly Jug - wireless mouse
