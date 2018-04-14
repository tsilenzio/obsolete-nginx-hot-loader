import Ansible from './Ansible';

export default class Conf {
  reload() {
    new Ansible('playbooks/nginx.yml');
  }
}
