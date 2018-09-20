<?php

use Faker\Generator as Faker;

$factory->define(App\DocumentFee::class, function (Faker $faker) {
    return [
        'customer_id' => rand(0,5),
        'loan_id' => rand(0,5),
        'cashier_id' => rand(0,5),
        'amount'=>$faker->numberBetween(350000,100000000),
        'percentage' => $faker->numberBetween(0,100),
        'date'=>$faker->date(),
    ];
});
