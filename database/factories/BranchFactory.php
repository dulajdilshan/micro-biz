<?php

use Faker\Generator as Faker;

$factory->define(Model::class, function (Faker $faker) {
    return [
        'branch_code' => str_random(4),
        'branch_name' => str_random(5),
        'town' => str_random(4),
    ];
});
