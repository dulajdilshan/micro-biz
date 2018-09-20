<?php

use Faker\Generator as Faker;

$factory->define(App\DocumentFee::class, function (Faker $faker) {
    return [
        'customer_id' => uniqid(),
        'loan_id' => uniqid(),
        'cashier_id' => uniqid(),
        'amount'=>$faker->numberBetween(350000,100000000),
        'percentage' => $faker->numberBetween(0,100),
        'date'=>$faker->date(),
    ];
});
