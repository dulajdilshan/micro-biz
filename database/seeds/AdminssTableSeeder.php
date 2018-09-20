<?php

use Illuminate\Database\Seeder;

class AdminssTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(\App\Admin::class, 5)->create();
    }
}
