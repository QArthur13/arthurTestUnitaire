Dans le dossier "Back":
- En premier faire docker-compose build
- En deuxième faire docker-compose up
- Et enfin faire docker-compose exec app bash

Une fois dans Docker:
- Faire composer install
- Une fois le composer install terminer, lancer ses commandes:
- php bin/console doctrine:database:create --env=test
- php bin/console doctrine:migrations:migrate
- php bin/console doctrine:migrations:migrate --env=test
- php bin/console doctrine:fixtures:load
- php bin/console doctrine:fixtures:load --env=test

Pour lancer les test de PHP, soyez sür que vous êtes toujours dans le Docker, puis lancer cette commande:
- php bin/phpunit

Pour le coverage lancer cette commande:
- XDEBUG_MODE=coverage ./vendor/bin/phpunit  --coverage-html=out/

Si vous avez live server dans VS Code, lancer le et aller dans "Back"/"out"

Dans le dossier "Front":
- Lancer npm install

Soyez sûr que le Docker côté Back marche
Ensuite lancer cette commande: npm start
Pour les test unitaires lancer cette commande: npm test
Pour cypress lancer cette commande: npm cypress:open

Et voilà, c'est tout

Arthur Quaranta étudiant en Master1 DevWeb au campus Ynov Aix-en-Provence
