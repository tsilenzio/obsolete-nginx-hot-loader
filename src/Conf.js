import Ansible from './Ansible';

export default class Conf {
  reload() {
    this.ansible = new Ansible('playbooks/nginx.yml');

    return this;
  }
}
