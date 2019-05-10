<?php

namespace App\Http\Controllers\Backoffice;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ProfileController extends Controller
{
    //
    public function showProfiles () {
        $profiles = Profile::orderBy('name', 'desc')->get();       
    }
}
