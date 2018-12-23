<?php

use Faker\Generator as Faker;

$factory->define(App\Loan::class, function (Faker $faker) {
    return [
        'loan_number' => str_random(0, 5),
        'customer_id' => rand(0, 10),
        'group_id' => rand(0, 3),
        'branch_id' => rand(0, 3),
        'center_id' => rand(0, 3),
        'cashier_id' => rand(0, 10),
        'is_settled' => $faker->boolean,
        'is_approved' => $faker->boolean,
        'loan_amount' => $faker->numberBetween(25000, 100000),
        'net_amount' => $faker->numberBetween(25000, 100000),
        'rate' => rand(0, 20),
        'weeks' => rand(0, 20),
        'remaining_weeks' => rand(0, 10),
        'paid_weeks' => rand(0, 10),
        'weekly_installment' => rand(10000, 20000),
        'paid_amount' => rand(25000, 100000),
        'balance' => rand(25000, 100000),
        'next_payment_date' => $faker->date(),
        'obtained_date' => $faker->date(),
        'end_date' => $faker->date(),
    ];
});
