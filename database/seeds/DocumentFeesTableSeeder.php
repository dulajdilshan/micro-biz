<?php

use Illuminate\Database\Seeder;

class DocumentFeesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */

    public function run()
    {
        factory(\App\DocumentFee::class, 2)->create();
    }
}
