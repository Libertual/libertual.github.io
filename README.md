# online-resume
On line resume made with Angular.js, Materialize, jQuery...

Demo at [Libertual's page](http://libertual.github.io/resume.html)

## Prerequisite Technologies
### Linux

* *Git* - Get git from <a href="http://git-scm.com/downloads">download</a>  or type.

```
apt-get install git

```

* *Node.js* - <a href="http://nodejs.org/download/">Download</a> and Install Node.js, nodeschool has free <a href=" http://nodeschool.io/#workshoppers">node tutorials</a> to get you started.

If you're using ubuntu, nvm is the best way to install Node.js.
```bash
$ curl https://raw.githubusercontent.com/creationix/nvm/v0.11.1/install.sh | bash
$ source ~/.profile
$ nvm ls-remote
$ nvm install 4.2.1

```

### Windows
* *Node.js* - <a href="http://nodejs.org/download/">Download</a> and Install Node.js, nodeschool has free <a href=" http://nodeschool.io/#workshoppers">node tutorials</a> to get you started.
* *Git* - The easiest way to install git and then run the rest of the commands through the *git bash* application (via command prompt) is by downloading and installing <a href="http://git-scm.com/download/win">Git for Windows</a>

### OSX
* *Node.js* -  <a href="http://nodejs.org/download/">Download</a> and Install Node.js or use the packages within brew or macports.
* *git* - Get git <a href="http://git-scm.com/download/mac">from here</a>.

## Prerequisite packages

* onlineResume currently works with gulp.

```
$ npm install -g gulp

```

## Installation
To start with onlineResume fork or clone git repository from Github.

```bash
$ git clone https://github.com/tecnual/onlineResume.git
$ cd onlineResume
```
### Installing packages

```
$ npm install
```

### Invoke gulp

onlineResume supports the gulp task runner for various services which are applied on the code.
To start your application run -

```bash
$ gulp
$ gulp build
$ gulp server

```

Then, open a browser and go to:
```bash
http://localhost:8000
```

### Troubleshooting
During installation depending on your os and prerequisite versions you may encounter some issues.

Most issues can be solved by one of the following tips, but if you are unable to find a solution feel free to contact us via the repository issue tracker or the links provided below.

#### Update NPM

Sometimes you may find there is a weird error during install like npm's *Error: ENOENT*. Usually updating those tools to the latest version solves the issue.

* Updating NPM:
```bash
$ npm update -g npm
```

* Updating Gulp:
```bash
$ npm update -g gulp
```

#### Cleaning NPM cache
NPM has a caching system for holding packages that you already installed.
We found that often cleaning the cache solves some troubles this system creates.

* NPM Clean Cache:
```bash
$ npm cache clean
```

## Technologies

### The onlineResume stack

onlineResume uses this main Technologies *M*aterialize, *A*ngular.js, *N*ode.js and *G*ulp.js.

<dl class="dl-horizontal">
<dt>Materialize.js</dt>
<dd>A modern responsive front-end framework based on Material Design</dd>
<dt>AngularJS</dt>
<dd>Angular's Official Website is a great starting point. CodeSchool and google created a <a href="https://www.codeschool.com/courses/shaping-up-with-angular-js">great tutorial</a> for beginners, and the angular videos by <a href="https://egghead.io/">Egghead</a>.</dd>
<dt>Node.js</dt>
<dd>Start by going through Node.js Official Website and this StackOverflow thread, which should get you going with the Node.js platform in no time.</dd>
<dt>Gulp.js</dt>
<dd>The streaming build system. Is a task/build runner for development.</dd>
</dl>

## More Information
  * Visit us at [tecnual.com](http://www.tecnual.com/).
  * You can see a demo at [Libertual's Page](http://libertual.github.io/).

## Credits
  * <a href="https://github.com/Libertual">Libertual</a>  

## License
We believe that onlineResume should be free and easy to integrate [The GPLv3 License](http://www.gnu.org/licenses/gpl-3.0.html)
