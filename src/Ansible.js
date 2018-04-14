import { spawn }  from 'child_process';

// Internal reference to spawned process
let _child;

// Track if the process is currently running
let _executing = false;

export default class Ansible {
  constructor(playbook, ...params) {
    // Prevent running the command concurrently
    if(!_executing) {
      params.unshift(playbook);
      _executing = true;
      this.exec(params);
    }
  }

  exec(params) {
    // Update the internal spawn reference;
    _child = spawn('ansible-playbook', params, {
      // Pipe the output, including colors, to the console
      shell: true,
      stdio: 'inherit',
    }).on('close', function() {
      _executing = false;
    });
  }
}
