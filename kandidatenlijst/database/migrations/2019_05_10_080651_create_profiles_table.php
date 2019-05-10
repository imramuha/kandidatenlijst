<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProfilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('profiles', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('city');
            $table->string('email');
            $table->string('last_mailed_time');
            $table->string('candidate_id');
            $table->string('vdab_id');
            $table->string('is_new');
            $table->string('samenvatting');
            $table->string('persoongebonden_competenties');
            $table->string('vervoer');
            $table->string('extra_info');
            $table->string('adres');
            $table->date('geboortedatum');
            $table->string('nationaliteit');
            $table->string('geslacht');
            $table->string('gsm');
            $table->date('hobby');
            $table->string('beschikbaarheid');
            $table->string('datainserted');
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
        Schema::dropIfExists('profiles');
    }
}
