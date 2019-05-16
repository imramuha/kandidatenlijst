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

    // 0: show all proiles where IsNew is 1
    public function showProfiles()
    {
        // get all users from the db
        $profiles = Profile::with('details', 'details.detailtype')->where('is_new', '1')->get();

        return response()->json($profiles);    
    }

    // 1: show one profile based on id
    public function showProfile ($id) {
        $profile = Profile::with('details', 'details.detailtype')->where('id', $id)->get();
        return response()->json($profile);
    }

    // 2: hide profile by changing the isNew to 0
    public function hideProfile (Request $request) {

        $id = $request->Input('id');

        Profile::where('id', '=', $id)->update(array(
            'is_new' => '2',
        ));

        $response = array('response' => 'The profile is now hidden.', 'succes' => true);
        return $response;
    }

    // 3: update the profile of the selected person
    public function updateProfile (Request $request) {

        $id = $request->Input('id');

        Profile::where('id', '=', $id)->update(array(
            'name' => $request->input('name'),
            // otherfields
        ));

        $response = array('response' => 'The profile is now updated', 'succes' => true);
        return $response;
    }

    // 4: push the profile to the ZOHO CRM
    public function storeProfile(Request $request) {

        $profile = Profile::create([
            'name' => $request->input('name'),
            // other fields
        ]);
 
        $response = array('response' => 'Your profile has been stored!', 'succes' => true);
        return $response;
    }
}
