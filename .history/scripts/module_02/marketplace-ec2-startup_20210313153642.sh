#!/bin/bash
sudo apt-get update
sudo apt-get -y install git
sudo rm -rf /home/bitnami/hbfl
git clone https://github.com/ryanmurakami/hbfl.git /home/bitnami/hbfl
chown -R bitnami: /home/bitnami/hbfl
chown -R bitnami: /root
cd /home/bitnami/hbfl
sudo npm i
sudo npm run start

# The above commands base64 encoded for entering into UserData
# IyEvYmluL2Jhc2gNCnN1ZG8gYXB0LWdldCB1cGRhdGUNCnN1ZG8gYXB0LWdldCAteSBpbnN0YWxsIGdpdA0Kc3VkbyBybSAtcmYgL2hvbWUvYml0bmFtaS9oYmZsDQpnaXQgY2xvbmUgaHR0cHM6Ly9naXRodWIuY29tL3J5YW5tdXJha2FtaS9oYmZsLmdpdCAvaG9tZS9iaXRuYW1pL2hiZmwNCmNob3duIC1SIGJpdG5hbWk6IC9ob21lL2JpdG5hbWkvaGJmbA0KY2QgL2hvbWUvYml0bmFtaS9oYmZsDQpzdWRvIG5wbSBpDQpzdWRvIG5wbSBydW4gc3RhcnQ=
