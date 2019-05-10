<?php

namespace App\Http\Controllers\Backoffice;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Profile;
use Illuminate\Support\Facades\DB;

class ProfileController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // get all users from the db
        $profiles = Profile::where('isNew', 1)->get();//where('isNew', '1')->get();

        return view('profiles_show', ['profiles' => $profiles]);
        //$profiles = DB::table('Profiles')->get();
        //return view('profiles_show', ['profiles' => $profiles]);
    }
}
