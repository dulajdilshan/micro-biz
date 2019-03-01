<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLoansTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('loans', function (Blueprint $table) {
            $table->increments('id');
            $table->char('index', 3);
            $table->char('loan_no', 20);
            $table->unsignedInteger('customer_id');
            $table->unsignedInteger('group_id');
            $table->unsignedInteger('branch_id');
            $table->unsignedInteger('center_id');
            $table->unsignedInteger('cashier_id');
            $table->unsignedInteger('state');  // 0 - Created Not approved, 1 - Doc chargers paid, 2 - Settled
            $table->boolean('is_approved');
            $table->boolean('is_active');
            $table->bigInteger('loan_amount');
            $table->bigInteger('net_amount');
            $table->unsignedInteger('rate');
            $table->unsignedInteger('weeks');
            $table->unsignedInteger('paid_weeks');
            $table->bigInteger('weekly_installment');
            $table->bigInteger('paid_amount');
            $table->bigInteger('balance');
            $table->date('active_date');
            $table->date('start_date');
            $table->date('end_date');
            $table->date('next_payment_date');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('loans');
    }
}
