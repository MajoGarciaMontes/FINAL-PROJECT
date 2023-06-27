-- Created with and exported from QuickDBD: https://www.quickdatabasediagrams.com/, and edited by María José García,
-- Roberto Barron, Luis Paul Garay and Daniel Murillo.

-- The database creation went through three different stages:
-- first: the creation of the table schemas,
-- second: the import/insertion of the data into the tables,
-- and third: the addition of FK constraints.

-- HELPFUL TOOLS:
-- To select the tables when needed:
SELECT * FROM tumor_measures;
SELECT * FROM diagnosis_results;

-- To drop tables when needed:
DROP TABLE "tumor_measures";
DROP TABLE "diagnosis_results";

-- FIRST STAGE: Creation of the table schema.

-- 1. Created a main table for the measures of tumors of each participant with 'id' as the PK:
CREATE TABLE "tumor_measures" (
    "id" INT   NOT NULL,
    "diagnosis" INT   NOT NULL,
    "radius_mean" DEC   NOT NULL,
    "texture_mean" DEC   NOT NULL,
    "perimeter_mean" DEC   NOT NULL,
    "area_mean" DEC   NOT NULL,
    "smoothness_mean" DEC   NOT NULL,
    "compactness_mean" DEC   NOT NULL,
    "concavity_mean" DEC   NOT NULL,
    "concave_points_mean" DEC   NOT NULL,
    "symmetry_mean" DEC   NOT NULL,
    "fractal_dimension_mean" DEC   NOT NULL,
    "radius_se" DEC   NOT NULL,
    "texture_se" DEC   NOT NULL,
    "perimeter_se" DEC   NOT NULL,
    "area_se" DEC   NOT NULL,
    "smoothness_se" DEC   NOT NULL,
    "compactness_se" DEC   NOT NULL,
    "concavity_se" DEC   NOT NULL,
    "concave_points_se" DEC   NOT NULL,
    "symmetry_se" DEC   NOT NULL,
    "fractal_dimension_se" DEC   NOT NULL,
    "radius_worst" DEC   NOT NULL,
    "texture_worst" DEC   NOT NULL,
    "perimeter_worst" DEC   NOT NULL,
    "area_worst" DEC   NOT NULL,
    "smoothness_worst" DEC   NOT NULL,
    "compactness_worst" DEC   NOT NULL,
    "concavity_worst" DEC   NOT NULL,
    "concave_points_worst" DEC   NOT NULL,
    "symmetry_worst" DEC   NOT NULL,
    "fractal_dimension_worst" DEC   NOT NULL,
    CONSTRAINT "pk_tumor_measures" PRIMARY KEY (
        "id"
     )
);

-- 2. Created a table for results of each participant with 'diagnosis' as the PK:
CREATE TABLE "diagnosis_results" (
    "id" INT   NOT NULL,
    "diagnosis" VARCHAR   NOT NULL,
    CONSTRAINT "pk_diagnosis_results" PRIMARY KEY (
        "id"
     )
);

-- SECOND STAGE: Import/insertion of the data into the tables.
-- To avoid errors due to violating the FK constraints specified in the third stage of this process, the data
-- was imported/inserted before the FK constraints were specified.

-- Table 1: Used the 'Import/Export Data...' pgAdmin option to import the data of the main table 'tumor_measures'
-- from a CSV file.

-- Table 2: Specified the results of the diagnosis and inserted them into the
-- 'diagnosis_results' table:

INSERT INTO diagnosis_results ("id", "diagnosis")
VALUES (0, 'B'),
(1, 'M');

-- THIRD STAGE: addition of FK constraints.
-- This section contains the FKs constraints that were added after creating the tables and importing/inserting
-- the data. Adding those constraints at the end worked better because it meant that all of the tables could be
-- created without any problems and updated in any order and it wouldn't cause any errors. Should the code be
-- edited for future analyses, it would also be easier to edit/scale it.

-- Altered the 'tumor_measures' table to add a constraint to turn its 'diagnosis' column into a FK that referenced the
-- 'diagnosis' column from the 'diagnosis_results' table (the relationship is many-to-one).

ALTER TABLE "tumor_measures" ADD CONSTRAINT "fk_tumor_measures_diagnosis" FOREIGN KEY("diagnosis")
REFERENCES "diagnosis_results" ("id");

