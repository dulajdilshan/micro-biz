<?php

use Faker\Generator as Faker;

$factory->define(App\Center::class, function (Faker $faker) {
    return [
        'branch_id' => rand(0,10),
        'center_code'=> str_random(4),
        'center_name'=>$faker->city,
    ];
});
