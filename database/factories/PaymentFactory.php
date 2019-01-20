<?php

use Faker\Generator as Faker;

$factory->define(App\Payment::class, function (Faker $faker) {
    return [
        'branch_id' => rand(0, 5),
        'customer_id' => rand(0, 5),
        'loan_id' => rand(0, 5),
        'center_id' => rand(0, 5),
        'cashier_id' => rand(0, 5),
        'amount' => $faker->numberBetween(12000,23000),
        'for_week' => rand(0, 40),
    ];
});
