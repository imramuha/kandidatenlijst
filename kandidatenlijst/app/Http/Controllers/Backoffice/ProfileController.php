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

        $id = $request->route('id');

        if(Profile::where('id', '=', $id)->update(array(
            'is_new' => '1',
        ))) {
            $response = array('response' => 'The profile is now hidden.', 'succes' => true);
            return $response;
        } else {
            $response = array('response' => 'The profile is not updated', 'succes' => false);
            return $response;
        }

    }

    // 3: update the profile of the selected person
    public function updateProfile (Request $request) {

        $id = $request->route('id');

        if(Profile::where('id', '=', $id)->update(array(
            'name' => $request->input('name'),
            'city' => $request->input('city'),
            'email' => $request->input('email'),
            'last_mailed_time' => $request->input('last_mailed_time'),
            'candidate_id' => $request->input('cadidate_id'),
            'vdab_id' => $request->input('vdab_id'),
            'is_new' => $request->input('is_new'),
            'samenvatting' => $request->input('samenvatting'),
            'persoongebonden_competenties' => $request->input('persoongebonden_competenties'),
            'vervoer' => $request->input('vervoer'),
            'extra_info' => $request->input('extra_info'),
            'adres' => $request->input('adres'),
            'geboortedatum'  => $request->input('geboortedatum'),
            'nationaliteit' => $request->input('nationaliteit'),
            'geslacht' => $request->input('geslacht'),
            'gsm' => $request->input('gsm'),
            'hobby' => $request->input('hobby'),
            'beschikbaarheid' => $request->input('beschikbaarheid'),
            'date_inserted' => $request->input('date_inserted'),
        ))) {            
            $response = array('response' => 'The profile is now updated.', 'succes' => true);
            return $response;
        } else {
            $response = array('response' => 'The profile is not updated.', 'succes' => false);
            return $response;
        };
    }

    // 4: push the profile to the ZOHO CRM
    public function storeProfile(Request $request) {

        $profile = Profile::create([
            'name' => $request->input('name'),
            'city' => $request->input('city'),
            'email' => $request->input('email'),
            'last_mailed_time' => $request->input('last_mailed_time'),
            'candidate_id' => $request->input('cadidate_id'),
            'vdab_id' => $request->input('vdab_id'),
            'is_new' => $request->input('is_new'),
            'samenvatting' => $request->input('samenvatting'),
            'persoongebonden_competenties' => $request->input('persoongebonden_competenties'),
            'vervoer' => $request->input('vervoer'),
            'extra_info' => $request->input('extra_info'),
            'adres' => $request->input('adres'),
            'geboortedatum'  => $request->input('geboortedatum'),
            'nationaliteit' => $request->input('nationaliteit'),
            'geslacht' => $request->input('geslacht'),
            'gsm' => $request->input('gsm'),
            'hobby' => $request->input('hobby'),
            'beschikbaarheid' => $request->input('beschikbaarheid'),
            'date_inserted' => $request->input('date_inserted'),
        ]);
 
        $response = array('response' => 'Your profile has been stored!', 'succes' => true);
        return $response;
    }
}
