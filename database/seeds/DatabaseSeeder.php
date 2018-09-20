<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            UsersTableSeeder::class,
            AdminssTableSeeder::class,
            BranchesTableSeeder::class,
            CashiersTableSeeder::class,
            CustomersTableSeeder::class,
            DocumentFeesTableSeeder::class,
            GroupsTableSeeder::class,
            LoansTableSeeder::class,
            ManagersTableSeeder::class,
            PaymentsTableSeeder::class,
            CentersTableSeeder::class
        ]);
    }
}
