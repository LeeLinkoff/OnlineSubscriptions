-- Database: onlineSubscriptions

DROP DATABASE IF EXISTS "onlineSubscriptions";

CREATE DATABASE "onlineSubscriptions"
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1252'
    LC_CTYPE = 'English_United States.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;



-- Table: public.companies

BEGIN;

DROP TABLE IF EXISTS public.companies;

CREATE TABLE IF NOT EXISTS public.companies
(
    id integer NOT NULL,
    name text COLLATE pg_catalog."default",
    website text COLLATE pg_catalog."default",
    CONSTRAINT pk_id PRIMARY KEY (id)
        INCLUDE(id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.companies
    OWNER to postgres;

END;



-- Table: public.services

BEGIN;

DROP TABLE IF EXISTS public.services;

CREATE TABLE IF NOT EXISTS public.services
(
    id integer NOT NULL,
    name text COLLATE pg_catalog."default",
    cost double precision,
    frequency text COLLATE pg_catalog."default",
    company_id integer,
    CONSTRAINT id PRIMARY KEY (id)
        INCLUDE(id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.services
    OWNER to postgres;

END;