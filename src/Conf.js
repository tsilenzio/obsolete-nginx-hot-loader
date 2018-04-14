import Ansible from './Ansible';

//
module.exports = class Conf {
  reload() {
    new Ansible('playbooks/nginx.yml');
  }
}
