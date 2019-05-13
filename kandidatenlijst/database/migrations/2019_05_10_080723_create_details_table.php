<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('details', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('period_or_language');
            $table->string('description');
            $table->integer('ProfileId');
            $table->integer('Type');
            $table->timestamps();
        });

        Schema::table('details', function($table) {
            $table->foreign('ProfileId')->references('id')->on('profiles')->onDelete('cascade')->onUpdate('cascade');
        });

        Schema::table('details', function($table) {
            $table->foreign('Type')->references('id')->on('detailstypes')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('details');
    }
}
