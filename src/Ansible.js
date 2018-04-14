import { spawn } from 'child_process';

// Track if the process is currently running
let executing = false;

export default class Ansible {
  constructor(playbook, ...params) {
    // Prevent running the command concurrently
    if (!executing) {
      params.unshift(playbook);
      executing = true;
      this.exec(params);
    }
  }

  exec(params) {
    spawn('ansible-playbook', params, {
      // Pipe the output, including colors, to the console
      shell: true,
      stdio: 'inherit',
    }).on('close', () => {
      executing = false;
    });

    return this;
  }
}
