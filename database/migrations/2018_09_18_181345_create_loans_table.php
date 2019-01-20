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
            $table->string('loan_number');
            $table->unsignedInteger('customer_id');
            $table->unsignedInteger('group_id');
            $table->unsignedInteger('branch_id');
            $table->unsignedInteger('center_id');
            $table->unsignedInteger('cashier_id');
            $table->boolean('is_settled');
            $table->boolean('is_approved');
            $table->bigInteger('loan_amount');
            $table->bigInteger('net_amount');
            $table->unsignedInteger('rate');
            $table->unsignedInteger('weeks');
            $table->unsignedInteger('remaining_weeks');
            $table->unsignedInteger('paid_weeks');
            $table->bigInteger('weekly_installment');
            $table->bigInteger('paid_amount');
            $table->bigInteger('balance');
            $table->dateTime('next_payment_date');
            $table->dateTime('obtained_date');
            $table->dateTime('end_date');
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
