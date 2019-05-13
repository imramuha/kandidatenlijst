
<table>
    <tr>
    <th>Naam</th>
    <th>City</th>
    <th>Email</th>
    <th>Detail Type</th>
    <th>Detail Type2</th>
    </tr>
@foreach ($profiles as $profile)  
<tr>                     
    <td>{{ $profile->Name }}</td>
    <td>{{ $profile->City }}</td>
    <td>{{ $profile->Email }}</td>
    <td>{{ $profile }}</td>
    <td>Detail</td>
    </tr>
@endforeach
</table>