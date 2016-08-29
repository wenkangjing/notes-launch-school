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
  + -a all files including hidden files
  + -d list directory
  + -d .* list dotfiles/hidden
  + ls .. list parent or root
  + ls ../.. list parent's parent

- path
  + .. list parent or root
  + ../.. list parent's parent
  + /bac from root directory
  + abc/ = ./abc = ./abc/, from current directory
  + ../abc, from parent
  + $home = ~ = /home/username
  + / = root, the parent of $home, bin, dev,etc,lib,proc,tmp,user,var
  + e.g.

- which
 + return the location of a command
 - root/bin vs usr/bin
    - /bin : For binaries usable before the /usr partition is mounted. This is used for trivial binaries used in the very early boot stage or ones that you need to have available in booting single-user mode. Think of binaries like cat, ls, etc.
    - /sbin : Same, but for scripts with superuser (root) privileges required.
    - /usr/bin : Same as first, but for general system-wide binaries.
    - /usr/sbin : Same as above, but for scripts with superuser (root) privileges required.
    - /usr/local/bin or /usr/local/sbin :  my own script, not managed by the system packages

// move everything to subfolder: tmp
$ mv * ~/tmp
// move 1.file back to current folder
$ mv ~/tmp/1.file ./


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

- env // list all env variables // case sensitive
  SOMETHING='some value'
  echo $SOMETHING
  COMMAND='echo'
  $COMMAND $SOMETHING
  colored prompt
  PS1="\n\[\e[0;37m\][\h] \e[0;35m\]\d\e[0m\]\n\[\e[0;31m\]\u\[\e[0;34m\] in \[\e[1;33m\]\w\[\e[m\]\[\e[0;31m\]\n\[\033[35m\]$\[\033[00m\] "
  
  
  - load env var in session creation, in .bashrc, export var goes globally, modify and run $ source ~/.bashrc, e.g.
  $ echo 'export PS1="this is a test$ "' >> ~/.bashrc

- $PATH // case sensitive, spliter :


Execute
- If you want to execute a file in your current directory, you have to type ./ or the path to your current directory before the filename. 
- Ctrl + C = SIGINT

Permissions in linux
> ownership
  - user
  - group 
  - other

> access types
  - read (r), write and delete (w), and execute (x), - permission not granted

# +-------- Directory or not
# |  +------- User Read, Write, Execute
# |  |   +------- Group Read, Write, Execute
# |  |   |   +----- Other Read, Write, Execute
# |  |   |   |   +--- The name of the user
# |  |   |   |   |     +--- The name of the group
# |  |   |   |   |     |
# d|rwx|rwx|rwx user group
drwxr-xr-x+ 1 bao bao    0 Aug 29 21:44 .
1/3/3/3 user group

u, g, o, or a = "group", "other", and "all",

$ chmod +w sample.txt // give write permission

Number	Permission
0	No permission granted.
1	Can execute.
2	Can write.
3	Can write and execute (2 + 1 = 3).
4	Can read.
5	Can read and execute (4 +1 = 5).
6	Can read and write (4 + 2 = 6).
7	Can read and write and execute (4 + 2 + 1 = 7).

> Shell vs Bash vs Terminal vs Console