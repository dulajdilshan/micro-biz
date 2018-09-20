<?php

use Faker\Generator as Faker;

$factory->define(App\Payment::class, function (Faker $faker) {
    return [
        'branch_id' => rand(0, 5),
        'user_id' => rand(0, 5),
        'center_id' => rand(0, 5),
        'full_name' => $faker->name,
        'nic' => $faker->uuid,
        'gs_division' => str_random(4),
        'birthday' => $faker->date(),
        'age' => rand(0, 40),
        'contact_no' => $faker->phoneNumber,
        'address' => $faker->address,
    ];
});
