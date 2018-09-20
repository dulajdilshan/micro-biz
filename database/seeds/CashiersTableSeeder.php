<?php

use Illuminate\Database\Seeder;

class CashiersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(\App\Cashier::class, 2)->create();
    }
}
