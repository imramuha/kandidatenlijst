<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Detail extends Model
{
    //


    /**
     * Get the profile that the detail belongs to.
     */
    public function profile()
    {
        return $this->belongsTo('App\Profile', 'profile_id');
    }

    /**
     * Get the detailtype that the detail belongs to.
     */
    public function detailtype()
    {
        return $this->belongsTo('App\Detailtype', 'detailtype_id');
    }
}
