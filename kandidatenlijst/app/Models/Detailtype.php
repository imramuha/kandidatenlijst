<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Detailtype extends Model
{
    //

    /**
     * Get the details that the profile belongs to.
     */
    public function details()
    {
        return $this->hasMany(Detail::class);
    }

}
