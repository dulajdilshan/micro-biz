<?php

use Faker\Generator as Faker;

$factory->define(App\Customer::class, function (Faker $faker) {
    return [
        'nic'=>$faker->uuid,
        'first_name'=>$faker->firstName,
        'last_name'=>$faker->lastName,
        'full_name'=>$faker->name,
        'name_prefix'=>str_random(3),
        'birthday'=>$faker->date(),
        'age'=>rand(0,56),
        'gender'=>"male",
        'married'=>$faker->boolean,
        'contact_no1'=>$faker->phoneNumber,
        'contact_no2'=>$faker->phoneNumber,
        'address_1'=>$faker->address,
        'address_2'=>$faker->address,
        'gs_division'=>$faker->lastName,
        'group_id'=>rand(0,10),
        'center_id'=>rand(0,5),
        'branch_id'=>rand(0,5),
        'center_code'=>str_random(4),
        'center_name'=>str_random(4),
        'is_loan_settled'=>$faker->boolean,
    ];
});
