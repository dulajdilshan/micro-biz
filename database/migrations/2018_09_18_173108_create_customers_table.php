<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCustomersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('customers', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nic')->unique();
            $table->char('customer_no', 20);
            $table->char('index', 3);
            $table->unsignedInteger('center_id');
            $table->unsignedInteger('branch_id');
            $table->unsignedInteger('group_id');
            $table->string('first_name');
            $table->string('last_name');
            $table->string('full_name');
            $table->char('name_initials',10);
            $table->date('birthday');
            $table->unsignedInteger('age');
            $table->string('gender');
            $table->boolean('married');
            $table->string('phone1');
            $table->string('phone2');
            $table->text('address_1');
            $table->text('address_2');
            $table->unsignedInteger('gs_division_id');
            $table->boolean('has_active_loan');
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
        Schema::dropIfExists('customers');
    }
}
