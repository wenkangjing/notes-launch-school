**200 Front end Prep** 

### 200 - L1 - Front-end Prep

#### Command Line - ebook

Setup

1. Sign up for a service that provides a full, in-browser development environment, such as Nitrous or Cloud 9. 

2. Use Rackspace or Digital Ocean to set up a managed server that provides console access.

3. Set up a virtual machine on your computer. You can use Virtualbox, VMWare, Vagrant, Docker, or a combination of these.

Command Line ubuntu

[user]@[hostname]:[current_directory]$
e.g.ubuntu@chopin:~$
ubuntu as user
chopin as machine name
~ as home directory
$ at last
the whole called prompt, aka $

Try in Cygwin
- tar - zip
- pwd - print current working directory
- ls - list directory = dir in Windows
- man - manual

Usage
- restart servers
- batch to rename file
- manage logs
- setup scheduled tasks. cron jobs in linux
- debug server
- Monkey patch code (dirty)

Command	Description
- cd	Change directory.
  + - ../.. Two levels up
  + ~     Your "home" directory, or the directory you are placed in when you log in.
- ls	List files and directories in current directory.
  + lah long, all, human readable 
- pwd	Display the path of the current directory.
- touch	Create a file.
- mkdir	Create a directory.
  + -p, --parents no error if existing, make parent directories as needed
- rm	Remove a file or directory. Warning: deleting a file or directory with this command is permanent!
  + -r recursive
- cp	Copy a file or directory.
- mv	Move or rename a file or directory.
- echo	Print text to STDOUT.
- cat	Display contents of a file.
- more	Display contents of a file, starting at the top and letting the user scroll down.
- less	Display contents of a file in an even more interactive way.
- head	Display the first part of a file.
- tail	Display the last part of a file.
- man	Display documentation about a command.
