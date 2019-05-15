<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::group([
    'middleware' => 'auth:api',
], function () {
   
    // Profiles
    Route::get('/profiles', 'Backoffice\ProfileController@showProfiles');
    Route::get('/profiles/{id}', 'Backoffice\ProfileController@showProfile');
    Route::put('/profiles/{id}/hide', 'Backoffice\ProfileController@hideProfile');
    Route::put('/profiles/{id}/update', 'Backoffice\ProfileController@updateProfile');
    Route::post('/profiles/{id}/store', 'Backoffice\ProfileController@storeProfile');

});
