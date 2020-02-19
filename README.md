# DES Portal Home

This tool has the purpose of presenting all Portal microservices' applications. This interface is part of a set of microservices of the DES Portal.

---

## Installation

**1. Clone the repository**

```shell
git clone https://github.com/linea-it/portal-home.git
cd portal-home
cp .env.template .env
```

**3. Running**

- If you're going to run in a development environment, use:
```shell
yarn install
yarn start
```
> Running at URL: http://localhost:3000

- Or by docker using docker-compose:

```shell
cp docker-compose.yml.template docker-compose.yml
docker-compose up
```
> Running at URL: http://localhost/portal-home

---

## Release History

* v1.0.0
   * INIT: First version

