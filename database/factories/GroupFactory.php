<?php

use Faker\Generator as Faker;

$factory->define(App\Group::class, function (Faker $faker) {
    return [
        'branch_id' => rand(0, 3),
        'center_code' => str_random(3),
        'center_name' => str_random(4),
    ];
});
