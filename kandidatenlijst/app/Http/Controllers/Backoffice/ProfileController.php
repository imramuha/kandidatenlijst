<?php

namespace App\Http\Controllers\Backoffice;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Profile;
use App\Models\Detailtype;
use App\Models\Detail;
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
        $profiles = Profile::with('details', 'details.detailtype')->get();//where('isNew', '1')->get();

        

        //return view('profiles_show', ['profiles' => $profiles]);
        //$profiles = DB::table('Profiles')->get();
        //return view('profiles_show', ['profiles' => $profiles]);

        return response()->json($profiles);
    
    }
}
